import React, { useState } from "react";
import type { FormEvent } from "react";

// import { collection, addDoc } from "firebase/firestore";
// import { db } from "../firebase";
 

 

// export default function TreasureForm() {
//   const [name, setName] = useState<string>("");
//   const [rarity, setRarity] = useState<"common" | "rare" | "epic" | "legendary">("common");
//   const [description, setDescription] = useState<string>("");
//   const [loading, setLoading] = useState<boolean>(false);
//   const [message, setMessage] = useState<string>("");

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     try {
//       await addDoc(collection(db, "treasures"), {
//         name,
//         rarity,
//         description,
//         createdAt: new Date()
//       });
//       setMessage("寶物登錄成功！");
//       setName("");
//       setRarity("common");
//       setDescription("");
//     } catch (error: any) {
//       setMessage("登錄失敗：" + error.message);
//     }
//     setLoading(false);
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "auto" }}>
//       <h2>登打寶物</h2>

//       <label>
//         名稱：
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//       </label>

//       <label>
//         稀有度：
//         <select
//           value={rarity}
//           onChange={(e) => setRarity(e.target.value as typeof rarity)}
//         >
//           <option value="common">普通</option>
//           <option value="rare">稀有</option>
//           <option value="epic">史詩</option>
//           <option value="legendary">傳說</option>
//         </select>
//       </label>

//       <label>
//         描述：
//         <textarea
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           rows={4}
//           required
//         />
//       </label>

//       <button type="submit" disabled={loading}>
//         {loading ? "提交中..." : "登錄寶物"}
//       </button>

//       {message && <p>{message}</p>}
//     </form>
//   );
// }
