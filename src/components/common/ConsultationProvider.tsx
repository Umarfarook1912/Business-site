"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { FreeConsultationModal } from "./FreeConsultationModal";

type ConsultationContextType = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const ConsultationContext = createContext<ConsultationContextType | undefined>(undefined);

export function ConsultationProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggeredAuto, setHasTriggeredAuto] = useState(false);

  useEffect(() => {
    // Check session storage on mount
    if (typeof window !== "undefined") {
      const shown = sessionStorage.getItem("growza_modal_shown");
      if (shown === "true") {
        setHasTriggeredAuto(true);
      }
    }
  }, []);

  const openModal = () => {
    setIsOpen(true);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("growza_modal_shown", "true");
      setHasTriggeredAuto(true);
    }
  };

  const closeModal = () => setIsOpen(false);

  // Auto trigger (exit intent and 15s idle)
  useEffect(() => {
    // If already triggered or modal is open, do not set up listeners
    if (hasTriggeredAuto || isOpen) return;

    let idleTimer: NodeJS.Timeout;

    const showModalAuto = () => {
      if (!hasTriggeredAuto && !isOpen) {
        openModal();
      }
    };

    const resetIdleTimer = () => {
      clearTimeout(idleTimer);
      idleTimer = setTimeout(showModalAuto, 15000); // 15 seconds
    };

    // User activity listeners to track idle state
    const activityEvents = ["mousemove", "keydown", "click", "scroll", "touchstart"];

    // Initialize idle timer
    resetIdleTimer();

    activityEvents.forEach((event) => {
      window.addEventListener(event, resetIdleTimer);
    });

    // Exit intent listener
    const handleMouseLeave = (e: MouseEvent) => {
      // clientY < 20 indicates mouse leaving top of the page (usually towards tab/address bar)
      if (e.clientY < 20) {
        showModalAuto();
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(idleTimer);
      activityEvents.forEach((event) => {
        window.removeEventListener(event, resetIdleTimer);
      });
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasTriggeredAuto, isOpen]);

  return (
    <ConsultationContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <FreeConsultationModal />
    </ConsultationContext.Provider>
  );
}

export function useConsultation() {
  const context = useContext(ConsultationContext);
  if (!context) {
    throw new Error("useConsultation must be used within a ConsultationProvider");
  }
  return context;
}
