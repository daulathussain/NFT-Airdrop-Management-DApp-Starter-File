import axios from "axios";
import { IPFS_GATEWAY } from "../constants";

// Pinata API credentials - store these in .env.local
const PINATA_API_KEY = process.env.NEXT_PUBLIC_PINATA_API_KEY;
const PINATA_SECRET_API_KEY = process.env.NEXT_PUBLIC_PINATA_SECRET_API_KEY;
const PINATA_API_URL =
  process.env.NEXT_PUBLIC_PINATA_API_URL || "https://api.pinata.cloud";
