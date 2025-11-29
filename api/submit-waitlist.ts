// import type { VercelRequest, VercelResponse } from "@vercel/node";
// import axios from "axios";

// export default async function handler(req: VercelRequest, res: VercelResponse) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method Not Allowed" });
//   }
//   console.log("Forwarding payload:", req.body);

//   try {
//     const response = await axios.post(
//       "https://api.therootshive.com/v3/rootscard/addevents",
//       req.body,
//       {
//         headers: { "Content-Type": "application/json" },
//         auth: {
//           username: process.env.API_USER!,
//           password: process.env.API_PASS!,
//         },
//       }
//     );

//     return res.status(200).json(response.data);
//   } catch (error: unknown) {
//     // Check if it's an Axios error to get more details
//     if (axios.isAxiosError(error)) {
//       console.error("Error from therootshive.com API:", error.response?.data);
//       console.error("Status code from API:", error.response?.status);

//       // Send the actual error details back to your frontend for easier debugging
//       return res.status(error.response?.status || 500).json({
//         message: "Request to downstream API failed",
//         details: error.response?.data,
//       });
//     }

//     // Fallback for non-Axios errors
//     console.error("An unexpected error occurred:", error);
//     return res.status(500).json({ message: "An unexpected error occurred" });
//   }
// }
