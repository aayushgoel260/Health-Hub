import React, { useState, useEffect, useRef } from "react";
import "./Community.css";

function Community() {
  const [problems, setProblems] = useState([]);
  const [newProblem, setNewProblem] = useState("");
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [explanation, setExplanation] = useState("Welcome to the Community Chat! Select a problem from the left to view or add messages.");
  const inputRef = useRef(null);

  const handleAddProblem = () => {
    if (newProblem.trim()) {
      setProblems([
        ...problems,
        { id: Date.now(), text: newProblem, chat: [] },
      ]);
      setNewProblem("");
      setExplanation("New problem added! Click on it to view or add messages.");
    }
  };

  const handleOpenProblem = (problem) => {
    setSelectedProblem(problem);
    setNewMessage("");
    setExplanation(`You are viewing the chat for: "${problem.text}"`);
  };

  const handleMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleAddMessage = () => {
    if (selectedProblem && newMessage.trim()) {
      const updatedProblem = {
        ...selectedProblem,
        chat: [...selectedProblem.chat, newMessage],
      };
      setProblems(problems.map(p => p.id === updatedProblem.id ? updatedProblem : p));
      setSelectedProblem(updatedProblem);
      setNewMessage("");
      setExplanation("Message added!");
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [selectedProblem]);

  return (
    <div className="Community">
      <h1 className="heading">Community Chat</h1>
      <div className="New">
        <div className="sidebar">
          <h2>Problems</h2>
          <div className="problem-list">
            {problems.map((problem) => (
              <div
                key={problem.id}
                className="problem-item"
                onClick={() => handleOpenProblem(problem)}
              >
                {problem.text}
              </div>
            ))}
          </div>
          <div className="add-problem">
            <input
              type="text"
              placeholder="Add a new problem"
              value={newProblem}
              onChange={(e) => setNewProblem(e.target.value)}
            />
            <button onClick={handleAddProblem}>Add</button>
          </div>
        </div>
        <div className="content">
          {selectedProblem ? (
            <div>
              <h2>{selectedProblem.text}</h2>
              <div className="chat">
                {selectedProblem.chat.map((message, index) => (
                  <div key={index} className="message">
                    {message}
                  </div>
                ))}
              </div>
              <div className="input-message">
                <input
                  type="text"
                  placeholder="Type your message"
                  value={newMessage}
                  onChange={handleMessageChange}
                  ref={inputRef}
                />
                <button onClick={handleAddMessage}>Send</button>
              </div>
            </div>
          ) : (
            <div className="no-problem-selected">
              Select a problem to view the chat
            </div>
          )}
        </div>
        <div className="explanation">
          <h2>Disease Information Center</h2>
          <p>{explanation}</p>
        </div>
      </div>
    </div>
  );
}

export default Community;
