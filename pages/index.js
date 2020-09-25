import Head from "next/head";
import { Heading } from "../components/heading";
import { Notes } from "../notes/notes";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <div>project begins</div>
      <Heading />
      <Notes />
    </div>
  );
}