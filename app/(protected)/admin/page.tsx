"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { passwordCheck } from "@/action/password.action";
import DatabaseViewer from "@/components/database-viewer";

const verifyPassword = async (password: string): Promise<boolean> => {
  const response = await passwordCheck(password);
  console.log(response);
  if (!response.success) {
    return false;
  }
  return true;
};

const DataPage: React.FC = () => {
  const [password, setPassword] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const isValid = await verifyPassword(password);

    if (isValid) {
      setIsVerified(true);
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  return (
    <div>
      <div className="text-center text-5xl pt-10 font-sans">Admin Page</div>
      <form
        onSubmit={handleSubmit}
        className="w-1/4 mx-auto flex gap-x-2 items-center justify-center"
      >
        <Input
          type="password"
          placeholder="Please Enter Password"
          className="mt-5"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="mt-5" type="submit">
          Submit
        </Button>
      </form>

      {error && <p className="text-red-500 text-center mt-2">{error}</p>}
      {isVerified && (
        <div>
          <div className="text-center mt-5">
            <h2 className="text-3xl font-sans">Welcome, Admin!</h2>
            <p>This is the secure admin section.</p>
          </div>
          <DatabaseViewer />
        </div>
      )}
    </div>
  );
};

export default DataPage;
