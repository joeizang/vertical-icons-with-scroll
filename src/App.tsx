import React, { useEffect, useRef } from "react";
import {
  AlarmFill,
  Badge4kFill,
  BagCheckFill,
  ChevronDown,
  ChevronUp,
  GearFill,
  PaletteFill,
  PiggyBankFill,
  PlugFill,
  PrinterFill,
  Reddit,
  Server,
  ShieldLockFill,
  TerminalFill,
  Twitter
} from "react-bootstrap-icons";
import "./styles.css";

export default function App() {
  const settingsRef = useRef<any>(null);
  const otherIconsRef = useRef<any>(null);

  useEffect(() => {
    const temp = otherIconsRef.current?.clientHeight;
    return () => temp;
  });

  return (
    <>
      <div id="verticalPanel">
        <div id="requiredIcons" className="verticalPanelSections">
          <div className="icon-container">
            <AlarmFill size={28} />
          </div>
          <div className="icon-container">
            <Badge4kFill size={28} />
          </div>
          <div className="icon-container">
            <Twitter size={28} />
          </div>
          <div className="icon-container">
            <TerminalFill size={28} />
          </div>
          <div className="icon-container">
            <PlugFill size={28} />
          </div>
          {otherIconsRef.current?.scrollHeight >
          otherIconsRef.current?.clientHeight ? (
            <div className="chevron-container-up">
              <ChevronUp
                size={15}
                color={"black"}
                style={{
                  alignSelf: "center",
                  paddingLeft: "1.08px",
                  paddingBottom: "1px",
                  width: "11px",
                  border: "2px"
                }}
              />
            </div>
          ) : null}
        </div>
        <div
          id="otherIcons"
          ref={otherIconsRef}
          className={
            otherIconsRef.current?.scrollHeight >
            otherIconsRef.current?.clientHeight
              ? "otherIcons-border-bottom verticalPanelSections"
              : "verticalPanelSections"
          }
        >
          <div className="icon-container">
            <Reddit size={28} />
          </div>
          <div className="icon-container">
            <Badge4kFill size={28} />
          </div>
          <div className="icon-container">
            <ShieldLockFill size={28} />
          </div>
          <div className="icon-container">
            <TerminalFill size={28} />
          </div>
          <div className="icon-container">
            <BagCheckFill size={28} />
          </div>
          <div className="icon-container">
            <BagCheckFill size={28} />
          </div>
          <div className="icon-container">
            <PrinterFill size={28} />
          </div>
          <div className="icon-container">
            <Badge4kFill size={28} />
          </div>
          <div className="icon-container">
            <Twitter size={28} />
          </div>
          <div className="icon-container">
            <TerminalFill size={28} />
          </div>
          <div className="icon-container">
            <PrinterFill size={28} />
          </div>
          <div className="icon-container">
            <BagCheckFill size={28} />
          </div>
          <div className="icon-container">
            <Server size={28} />
          </div>
          <div className="icon-container">
            <Badge4kFill size={28} />
          </div>
          <div className="icon-container">
            <Twitter size={28} />
          </div>
          <div className="icon-container">
            <PaletteFill size={28} />
          </div>
          <div className="icon-container">
            <BagCheckFill size={28} />
          </div>
          <div className="icon-container">
            <PrinterFill size={28} />
          </div>
          <div className="icon-container">
            <PiggyBankFill size={28} />
          </div>
          <div className="icon-container">
            <PrinterFill size={28} />
          </div>
          <div className="icon-container">
            <PaletteFill size={28} />
          </div>
          <div className="icon-container">
            <Server size={28} />
          </div>
        </div>
        <div
          id="settingsIcons"
          ref={settingsRef}
          className="verticalPanelSections"
        >
          {otherIconsRef.current?.scrollHeight >
          otherIconsRef.current?.clientHeight ? (
            <div className="chevron-container">
              <ChevronDown
                size={15}
                color={"black"}
                style={{
                  alignSelf: "center",
                  paddingLeft: "1px",
                  paddingTop: "2px",
                  width: "11px"
                }}
              />
            </div>
          ) : null}
          <div className="icon-container icon-container-bottom">
            <GearFill size={28} />
          </div>
        </div>
      </div>
    </>
  );
}
