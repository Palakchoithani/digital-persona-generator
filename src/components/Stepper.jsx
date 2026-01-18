export default function Stepper({ step }) {
  const steps = [
    { label: "Name", icon: "👤" },
    { label: "Vibe", icon: "✨" },
    { label: "Colors", icon: "🎨" },
    { label: "Interests", icon: "💡" },
    { label: "Keywords", icon: "🏷️" },
  ];

  return (
    <div className="stepper">
      {steps.map((item, index) => (
        <div
          key={index}
          className={`stepper-item ${
            step === index ? "active" : step > index ? "completed" : ""
          }`}
        >
          <span className="stepper-number">
            {step > index ? "✓" : index + 1}
          </span>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

