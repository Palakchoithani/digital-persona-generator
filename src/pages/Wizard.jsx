import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { usePersonaStore } from "../store/personaStore";
import Stepper from "../components/Stepper";
import { fetchMoodboardImages } from "../api/unsplash";

// Validation schema
const schema = z.object({
  input: z.string().min(1, "This field is required"),
});

export default function Wizard() {
  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const updatePersona = usePersonaStore((s) => s.updatePersona);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  // ---------------------------------------
  // FIXED: onNext is now ASYNC + moodboard fetch
  // ---------------------------------------
  const onNext = async (data) => {
    console.log("Step:", step);
    console.log("Input:", data.input);

    if (step === 0) updatePersona({ name: data.input });
    if (step === 1) updatePersona({ vibe: data.input });
    if (step === 2) updatePersona({ colors: data.input.split(",") });
    if (step === 3) updatePersona({ interests: data.input });

    //  Moodboard generation
    if (step === 4) {
      updatePersona({ keywords: data.input });
      setIsLoading(true);

      try {
        console.log(" Generating complete AI persona...");
        await usePersonaStore.getState().generateCompletePersona();
        console.log(" Persona generated!");
      } catch (error) {
        console.error("Generation Error:", error);
      } finally {
        setIsLoading(false);
      }
    }

    setStep((prev) => prev + 1);
    reset({ input: "" });
  };

  const questions = [
    { text: "What's your name or persona name?", placeholder: "Enter your name...", icon: "👤" },
    { text: "Describe your vibe in 2–3 words", placeholder: "e.g., Creative, Adventurous, Calm", icon: "✨" },
    { text: "What are your favorite colors?", placeholder: "e.g., Blue, Purple, Teal (comma-separated)", icon: "🎨" },
    { text: "What are your interests & hobbies?", placeholder: "e.g., Photography, Travel, Music", icon: "💡" },
    { text: "Keywords that describe your personality", placeholder: "e.g., Minimalist, Tech-savvy, Nature lover", icon: "🏷️" },
  ];

  // Completed
  if (step >= questions.length) {
    return (
      <div className="wizard-complete">
        <div className="wizard-complete-icon">🎉</div>
        <h1 className="wizard-complete-title">All Steps Complete!</h1>
        <p className="wizard-complete-text">
          Your digital persona has been generated. Check out the results!
        </p>
        <button 
          onClick={() => navigate('/results')} 
          className="btn btn-gradient btn-lg"
        >
          ✨ View Your Persona
        </button>
      </div>
    );
  }

  return (
    <div className="wizard">
      <Stepper step={step} />

      <h2 className="wizard-question">
        <span style={{ marginRight: '12px' }}>{questions[step].icon}</span>
        {questions[step].text}
      </h2>

      <form onSubmit={handleSubmit(onNext)} className="wizard-form">
        <input
          {...register("input")}
          placeholder={questions[step].placeholder}
          className="wizard-input"
          autoFocus
        />

        {errors.input && (
          <div className="wizard-error">
            <span>⚠️</span>
            <span>{errors.input.message}</span>
          </div>
        )}

        <button type="submit" className="wizard-btn" disabled={isLoading}>
          {isLoading ? (
            <>
              <span className="wizard-btn-loading">Generating...</span>
              <span className="wizard-btn-icon">⏳</span>
            </>
          ) : (
            <>
              <span>{step === questions.length - 1 ? 'Generate Persona' : 'Continue'}</span>
              <span className="wizard-btn-icon">→</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}

