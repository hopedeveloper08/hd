"use client";

import {
  type ElementType,
  type ComponentPropsWithoutRef,
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { gsap } from "gsap";

interface TextTypeProps {
  className?: string;
  showCursor?: boolean;
  hideCursorWhileTyping?: boolean;
  cursorCharacter?: string | ReactNode;
  cursorBlinkDuration?: number;
  cursorClassName?: string;

  text: string | string[];

  as?: ElementType;

  typingSpeed?: number;
  initialDelay?: number;
  pauseDuration?: number;
  deletingSpeed?: number;

  loop?: boolean;
  textColors?: string[];

  variableSpeed?: {
    min: number;
    max: number;
  };

  onSentenceComplete?: (sentence: string, index: number) => void;

  startOnVisible?: boolean;
  reverseMode?: boolean;
}

type TextTypePropsWithHTML = TextTypeProps &
  Omit<ComponentPropsWithoutRef<"div">, keyof TextTypeProps>;

const TextType = ({
  text,
  as: Component = "div",

  typingSpeed = 50,
  pauseDuration = 2000,
  deletingSpeed = 30,

  loop = true,

  className = "",

  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = "|",
  cursorClassName = "",
  cursorBlinkDuration = 0.5,

  textColors = [],
  variableSpeed,

  onSentenceComplete,

  startOnVisible = false,
  reverseMode = false,

  ...props
}: TextTypePropsWithHTML) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible);

  const containerRef = useRef<HTMLElement | null>(null);
  const cursorRef = useRef<HTMLSpanElement | null>(null);

  const textArray = useMemo(
    () => (Array.isArray(text) ? text : [text]),
    [text],
  );

  const currentText = textArray[currentTextIndex] ?? "";

  const processedText = useMemo(() => {
    return reverseMode ? currentText.split("").reverse().join("") : currentText;
  }, [currentText, reverseMode]);

  const getRandomSpeed = useCallback(() => {
    if (!variableSpeed) {
      return typingSpeed;
    }

    const { min, max } = variableSpeed;

    return Math.random() * (max - min) + min;
  }, [variableSpeed, typingSpeed]);

  const currentTextColor =
    textColors.length > 0
      ? textColors[currentTextIndex % textColors.length]
      : "inherit";

  /**
   * Callback ref
   *
   * Important for React 19:
   * We don't access ref.current during render.
   */
  const setContainerRef = useCallback((node: HTMLElement | null) => {
    containerRef.current = node;
  }, []);

  /**
   * Start when visible
   */
  useEffect(() => {
    if (!startOnVisible) {
      return;
    }

    const element = containerRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [startOnVisible]);

  /**
   * Cursor animation
   */
  useEffect(() => {
    if (!showCursor) {
      return;
    }

    const cursor = cursorRef.current;

    if (!cursor) {
      return;
    }

    const animation = gsap.to(cursor, {
      opacity: 0,
      duration: cursorBlinkDuration,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });

    return () => {
      animation.kill();
    };
  }, [showCursor, cursorBlinkDuration]);

  /**
   * Typing animation
   */
  useEffect(() => {
    if (!isVisible || textArray.length === 0) {
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const schedule = (callback: () => void, delay: number) => {
      timeoutId = setTimeout(callback, delay);
    };

    /**
     * Delete current text
     */
    if (isDeleting) {
      if (displayedText.length > 0) {
        schedule(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
        }, deletingSpeed);

        return;
      }

      /**
       * Finished deleting.
       */
      setIsDeleting(false);

      onSentenceComplete?.(textArray[currentTextIndex], currentTextIndex);

      /**
       * Stop after last sentence when loop=false.
       */
      if (!loop && currentTextIndex === textArray.length - 1) {
        return;
      }

      setCurrentTextIndex((prev) => (prev + 1) % textArray.length);

      setCurrentCharIndex(0);

      return;
    }

    /**
     * Type current character.
     */
    if (currentCharIndex < processedText.length) {
      const delay = getRandomSpeed();

      schedule(() => {
        setDisplayedText((prev) => prev + processedText[currentCharIndex]);

        setCurrentCharIndex((prev) => prev + 1);
      }, delay);

      return;
    }

    /**
     * Finished typing.
     */
    if (!loop && currentTextIndex === textArray.length - 1) {
      return;
    }

    /**
     * Wait before deleting.
     */
    schedule(() => {
      setIsDeleting(true);
    }, pauseDuration);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [
    displayedText,
    currentCharIndex,
    currentTextIndex,
    isDeleting,
    processedText,
    textArray,
    isVisible,
    loop,
    deletingSpeed,
    pauseDuration,
    getRandomSpeed,
    onSentenceComplete,
  ]);

  const shouldHideCursor =
    hideCursorWhileTyping &&
    (currentCharIndex < processedText.length || isDeleting);

  /**
   * React 19:
   * Do not pass a ref through createElement().
   *
   * Since JSX resolves intrinsic elements correctly,
   * use a wrapper callback component.
   */
  const renderComponent = () => {
    const commonProps = {
      className: `inline-block whitespace-pre-wrap tracking-tight ${className}`,
      ...props,
    };

    if (Component === "div") {
      return (
        <div ref={setContainerRef} {...commonProps}>
          <span className="inline" style={{ color: currentTextColor }}>
            {displayedText}
          </span>

          {showCursor && (
            <span
              ref={cursorRef}
              className={`ml-1 inline-block ${
                shouldHideCursor ? "hidden" : ""
              } ${cursorClassName}`}
            >
              {cursorCharacter}
            </span>
          )}
        </div>
      );
    }

    /**
     * For non-div components, render without passing
     * the DOM ref through createElement().
     */
    return (
      <Component {...commonProps}>
        <span className="inline" style={{ color: currentTextColor }}>
          {displayedText}
        </span>

        {showCursor && (
          <span
            ref={cursorRef}
            className={`ml-1 inline-block ${
              shouldHideCursor ? "hidden" : ""
            } ${cursorClassName}`}
          >
            {cursorCharacter}
          </span>
        )}
      </Component>
    );
  };

  return renderComponent();
};

export default TextType;
