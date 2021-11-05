/* eslint-disable jsx-a11y/alt-text */
import React, {
  useState, useRef, useImperativeHandle, forwardRef, useCallback, useEffect,
} from 'react';
import { createPortal } from 'react-dom';

const reviewForm = document.getElementById('reviewForm');

export function NewReview({ children, fade = false, defaultOpened = false }, ref) {
  const [isOpen, setIsOpen] = useState(defaultOpened);

  const close = useCallback(() => setIsOpen(false), []);

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }), [close]);

  const handleEscape = useCallback((e) => {
    if (e.keyCode === 27) close();
  }, [close]);

  useEffect(() => {
    if (isOpen) document.addEventListener('keydown', handleEscape, false);
    return () => {
      document.removeEventListener('keydown', handleEscape, false);
    };
  }, [handleEscape, isOpen]);

  return createPortal(
    isOpen ? (
      <div className={`modal ${fade ? 'modal-fade' : ''}`}>
        <div className="modal-overlay" onClick={close} />
        <span role="button" className="modal-close" aria-label="close" onClick={close}>
          Close
        </span>
        <div className="modal-body">{children}</div>
      </div>
    ) : null,
    reviewForm,
  );
}

export default forwardRef(NewReview);
