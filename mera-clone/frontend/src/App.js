import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Assets from './Assets';
import './App.css';

function App() {
  return (
      <Router>
            <div className="min-h-screen bg-gray-900 text-white">
                    <header className="bg-black p-4 shadow-lg">
                              <h1 className="text-3xl font-bold text-blue-400">Mera - Future Asset Trading</h1>
                                        <nav className="mt-2">
                                                    <a href="/" className="mr-4 hover:text-blue-300">Home</a>
                                                                <a href="/assets" className="mr-4 hover:text-blue-300">Assets</a>
                                                                            <a href="#" className="hover:text-blue-300">AI Search</a>
                                                                                      </nav>
                                                                                              </header>
                                                                                                      <Routes>
                                                                                                                <Route path="/" element={<main className="p-8"><h2 className="text-2xl mb-4">Welcome to Mera 2030</h2><p>Buy and sell websites, apps, and more with AI-powered insights.</p></main>} />
                                                                                                                          <Route path="/assets" element={<Assets />} />
                                                                                                                                  </Routes>
                                                                                                                                        </div>
                                                                                                                                            </Router>
                                                                                                                                              );
                                                                                                                                              }

                                                                                                                                              export default App;