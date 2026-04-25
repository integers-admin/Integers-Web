// import { useState, useEffect } from "react";

// const InstagramFeed = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchInstagramPosts();
//   }, []);

//   const fetchInstagramPosts = async () => {
//     try {
//       setLoading(true);

//       const response = await fetch("/api/instagram");

//       if (!response.ok) {
//         throw new Error("API request failed");
//       }

//       const data = await response.json();

//       if (data.error) {
//         throw new Error(data.error);
//       }

//       setPosts(data.data || []);
//       setError(null);
//     } catch (err) {
//       console.error("Error fetching Instagram posts:", err);
//       setError("Failed to load Instagram feed. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return <div className="insta-state">Loading Instagram feed...</div>;
//   }

//   if (error) {
//     return (
//       <div className="insta-state insta-error">
//         {error}
//         <button onClick={fetchInstagramPosts} className="insta-retry">
//           Try Again
//         </button>
//       </div>
//     );
//   }

//   if (!posts.length) {
//     return <div className="insta-state">No posts available</div>;
//   }

//   return (
//     <div className="instagram-feed">
//       {posts.slice(0, 6).map((post) => (
//         <div key={post.id} className="insta-card">
//           {post.media_type === "VIDEO" ? (
//             <video
//               className="insta-media"
//               controls
//               loop
//               playsInline
//               preload="metadata"
//             >
//               <source src={post.media_url} type="video/mp4" />
//             </video>
//           ) : (
//             <img
//               src={post.media_url}
//               alt={post.caption || "Instagram post"}
//               className="insta-media"
//               loading="lazy"
//             />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default InstagramFeed;
