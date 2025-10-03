import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import "./MainStyled.css";

const Main = () => {
  const webcamRef = useRef(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [isMicOn, setIsMicOn] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(false);

  const toggleStream = () => {
    setIsStreaming(!isStreaming);
    setIsCameraOn(!isCameraOn);
  };

  const toggleMic = () => {
    setIsMicOn(!isMicOn);
  };

  return (
    <div className="meet-container">
      {/* 웹캠 미리보기 영역 */}
      <div className="preview-section">
        <div className="webcam-preview">
          {isStreaming ? (
            <Webcam
              ref={webcamRef}
              className="webcam-video"
              audio={false}
              screenshotFormat="image/jpeg"
              videoConstraints={{
                width: 1280,
                height: 720,
                facingMode: "user",
              }}
            />
          ) : (
            <div className="camera-placeholder">
              <div className="camera-icon">📹</div>
              <p>카메라 없음</p>
            </div>
          )}

          {/* 사용자 이름 */}
          <div className="user-name">이정민</div>

          {/* 하단 컨트롤 오버레이 */}
          <div className="preview-controls">
            <button
              className={`control-icon mic ${isMicOn ? "on" : "off"}`}
              onClick={toggleMic}
            >
              {isMicOn ? "🎤" : "🚫"}
            </button>
            <button
              className={`control-icon camera ${isCameraOn ? "on" : "off"}`}
              onClick={toggleStream}
            >
              {isCameraOn ? "📹" : "🚫"}
            </button>
            <button className="control-icon layout">⚙️</button>
          </div>
        </div>
      </div>

      {/* 하단 설정 컨트롤 */}
      <div className="bottom-controls">
        <div className="device-controls">
          <div className="device-selector">
            <span className="device-icon">🎤</span>
            <select className="device-select">
              <option>권한 필요</option>
            </select>
          </div>

          <div className="device-selector">
            <span className="device-icon">🔊</span>
            <select className="device-select">
              <option>스피커 (Realtek)</option>
            </select>
          </div>

          <div className="device-selector">
            <span className="device-icon">📹</span>
            <select className="device-select">
              <option>카메라를 찾을 수 없습니다</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
