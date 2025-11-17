import React, { useState } from 'react';

function Assets() {
  const [assets] = useState([
      { id: 1, name: 'Tech Blog', price: '$500', desc: 'High-traffic blog with AI insights.' },
          { id: 2, name: 'E-commerce App', price: '$2000', desc: 'Scalable app for 2030 markets.' },
            ]);

              return (
                  <div className="p-8">
                        <h2 className="text-2xl mb-4 text-blue-400">Available Assets on Mera</h2>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      {assets.map(asset => (
                                                <div key={asset.id} className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition">
                                                            <h3 className="text-xl font-semibold">{asset.name}</h3>
                                                                        <p>{asset.desc}</p>
                                                                                    <p className="text-green-400 font-bold">{asset.price}</p>
                                                                                                <button className="mt-2 bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">View Details</button>
                                                                                                          </div>
                                                                                                                  ))}
                                                                                                                        </div>
                                                                                                                            </div>
                                                                                                                              );
                                                                                                                              }

                                                                                                                              export default Assets;