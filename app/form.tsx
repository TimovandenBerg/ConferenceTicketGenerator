"use client";

import React, { useRef, useState } from "react";
import { Ticket } from "./lib/definitions";
import { atksinson } from "./ui/fonts";
import iconUpload from "../public/icons/icon-upload.svg";
import iconInfo from "../public/icons/icon-info.svg";
import styles from "./form.module.css";

export default function Form() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarError, setAvatarError] = useState("");
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [formShown, setFormShown] = useState(true);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleLabelClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    // Validate file type and size (max 500kb)
    if (!file.type.match(/^image\/(jpeg|png)$/)) {
      setAvatarError("Only JPG or PNG images are allowed.");
      setAvatarFile(null);
      return;
    }
    if (file.size > 500 * 1024) {
      setAvatarError("File size must be less than 500kb.");
      setAvatarFile(null);
      return;
    }
    setAvatarError("");
    setAvatarFile(file);
  };

  async function createTicket(formData: FormData): Promise<void> {
    const avatar = formData.get("avatar");
    const name = formData.get("name");
    const email = formData.get("email");
    const gname = formData.get("gname");

    const newTicket: Ticket = {
      avatar:
        avatar && typeof avatar === "object" && "name" in avatar
          ? (avatar as File)
          : null,
      name: name ? String(name) : "",
      email: email ? String(email) : "",
      gname: gname ? String(gname) : "",
    };

    setTicket(newTicket);
    setFormShown(false);

    if (!avatarFile) {
      setAvatarError("Please upload an avatar.");
      setFormShown(true);
      return;
    }
  }

  return (
    <section>
      {formShown && (
        <form action={createTicket} className={`${styles.form}`}>
          <section>
            <label htmlFor="avatar" className={atksinson.className}>
              Upload Avatar
            </label>
            <section
              className={`${styles.dragDropArea} ${
                dragActive ? styles.dragDropAreaActive : ""
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <input
                ref={inputRef}
                type="file"
                className={`${atksinson.className} ${styles.dragDropArea__input}`}
                id="avatar"
                name="avatar"
                accept="image/jpeg, image/png"
                onChange={handleInputChange}
              />
              <div
                className={`${atksinson.className} ${styles.center} ${styles.dragDropArea__label}`}
                tabIndex={0}
                role="button"
                onClick={handleLabelClick}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") handleLabelClick();
                }}
              >
                <img
                  src={iconUpload.src}
                  alt="upload icon"
                  className={styles.dragDropArea__icon}
                />
                <br />
                {avatarFile ? (
                  <span>{avatarFile.name}</span>
                ) : (
                  "Drag & Drop or Click to Upload"
                )}
              </div>
            </section>
            <figcaption className={styles.dragDropAreaInfo}>
              <img src={iconInfo.src} alt="info icon" />
              <p>Upload your photo (JPG or PNG, max size 500kb)</p>
            </figcaption>
            {avatarError && (
              <div style={{ color: "#ff4d4f", fontSize: 12, marginTop: 4 }}>
                {avatarError}
              </div>
            )}
          </section>
          <section>
            <label htmlFor="name" className={atksinson.className}>
              Full Name
            </label>
            <input
              type="text"
              className={`${atksinson.className} ${styles.input}`}
              name="name"
              id="name"
              maxLength={100}
              required
            />
          </section>
          <section>
            <label htmlFor="email" className={atksinson.className}>
              Email Address
            </label>
            <input
              className={`${atksinson.className} ${styles.input}`}
              type="email"
              name="email"
              id="email"
              placeholder="example@email.com"
              required
            />
          </section>
          <section>
            <label htmlFor="gname" className={atksinson.className}>
              Github Username
            </label>
            <input
              type="text"
              className={`${atksinson.className} ${styles.input}`}
              name="gname"
              id="gname"
              placeholder="@yourusername"
              required
            />
          </section>
          <button type="submit" className={styles.button}>
            Generate My Ticket
          </button>
        </form>
      )}
      <section
        className={`${styles.ticketContainer} ${
          ticket ? styles.ticketContainer : styles.displayNone
        }`}
      >
        {ticket ? (
          <div>
            <h2>Your Ticket</h2>
            <p>Name: {ticket.name}</p>
            <p>Email: {ticket.email}</p>
            <p>Github: {ticket.gname}</p>
            {ticket.avatar && (
              <img src={URL.createObjectURL(ticket.avatar)} alt="Avatar" />
            )}
          </div>
        ) : (
          <></>
        )}
      </section>
    </section>
  );
}
