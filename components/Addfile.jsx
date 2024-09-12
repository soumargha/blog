/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';


const Addfile = () => {
  const [comments, setComments] = useState([]); // Store comments
  const [newComment, setNewComment] = useState(''); // New comment text
  const [editingIndex, setEditingIndex] = useState(null); // Track which comment is being edited
  const [editComment, setEditComment] = useState(''); // Edited comment text

  // Load comments from localStorage when the component mounts
  useEffect(() => {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  // Save comments to localStorage
  const saveToLocalStorage = (updatedComments) => {
    localStorage.setItem('comments', JSON.stringify(updatedComments));
  };

  // Handle adding a comment
  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim() === '') return; // Prevent empty comments
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    saveToLocalStorage(updatedComments); // Save comments to localStorage
    setNewComment(''); // Clear input field after adding
  };

  // Handle deleting a comment
  const handleDeleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
    saveToLocalStorage(updatedComments); // Save comments to localStorage
  };

  // Handle initiating editing a comment
  const handleEditComment = (index) => {
    setEditingIndex(index);
    setEditComment(comments[index]);
  };

  // Handle saving an edited comment
  const handleSaveEdit = () => {
    if (editComment.trim() === '') return; // Prevent saving empty comments
    const updatedComments = [...comments];
    updatedComments[editingIndex] = editComment;
    setComments(updatedComments);
    saveToLocalStorage(updatedComments); // Save comments to localStorage
    setEditingIndex(null); // Exit edit mode
    setEditComment(''); // Clear edit input
  };

  

  return (

   
      <><h1 className="mb-[-4rem] mt-10 text-center text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Add your thoughts</span> </h1><div className="relative max-w-2xl bg-black rounded-lg border-black pt-4 mx-auto mt-20">

          <div className="absolute px-2 top-0 -left-[0.5] bg-indigo-200 rounded-tl-lg rounded-br-lg">
          </div>

          {/* Comment input form */}
          <form onSubmit={handleAddComment}>
              <div className="flex w-full px-3 mb-2 mt-6 items-start">
                  <textarea
                      className="bg-black rounded border border-black leading-normal w-full h-28 p-3 font-medium placeholder-gray-400 focus:outline-none focus:bg-white"
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Your comment"
                      required />
                  <button
  type="submit"
  className="ml-4 px-4 py-2 rounded-lg text-white bg-indigo-900 text-md h-12 self-end font-medium animate-bounce duration-1000 focus:animate-none hover:animate-none tracking-wide"
>
  <span className="ml-2">Comment </span>
</button>


              </div>
          </form>

          {/* Display comments */}
          <ul className="mt-6 space-y-4 px-3">
              {comments.map((comment, index) => (
                  <li key={index} className="flex justify-between items-center bg-black p-3 rounded shadow">
                      {editingIndex === index ? (
                          <input
                              type="text"
                              value={editComment}
                              onChange={(e) => setEditComment(e.target.value)}
                              className="border rounded px-2 py-1 w-full mr-4" />
                      ) : (
                          <span>{comment}</span>
                      )}

                      <div className="flex space-x-2">
                          {editingIndex === index ? (
                              <button
                                  onClick={handleSaveEdit}
                                  className="bg-blue-600 text-white px-3 py-1 rounded"
                              >
                                  Save
                              </button>
                          ) : (
                              <button
                                  onClick={() => handleEditComment(index)}
                                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                              >
                                  Edit
                              </button>
                          )}

                          <button
                              onClick={() => handleDeleteComment(index)}
                              className="bg-red-500 text-white px-3 py-1 rounded"
                          >
                              Delete
                          </button>
                      </div>
                  </li>
              ))}
          </ul>
      </div></>
  );
};

export default Addfile;
