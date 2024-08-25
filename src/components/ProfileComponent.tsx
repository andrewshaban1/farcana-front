'use client';
import React, { useEffect, useState } from 'react';

import { getProfile } from '@/src/api/backendApiClient';
import { useAuthContext } from '@/src/context/AuthContext';
import { ProfileType } from '@/src/types/common';

const ProfileComponent = () => {
  const { user } = useAuthContext();

  const [profile, setProfile] = useState<ProfileType | null>(null);

  useEffect(() => {
    async function fetchProfile() {
      if (user?.id) {
        try {
          const response = await getProfile(user?.id);

          setProfile(response.data);
        } catch (error) {
          console.error(error);
        }
      }
    }
    fetchProfile();
  }, [user]);

  return (
    <div className='flex justify-center mt-10'>
      <div>
        <table className='table-fixed text-left border-separate [border-spacing:0.75rem] bg-slate-100'>
          <thead>
            <tr className='row'>
              <th className='col bg-white'>Property</th>
              <th className='col bg-white'>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr className='row'>
              <td className='col bg-white'>ID:</td>
              <td className='col bg-white'>{profile?.id}</td>
            </tr>
            <tr className='row'>
              <td className='col bg-white'>Username: </td>
              <td className='col bg-white'>{profile?.username}</td>
            </tr>
            <tr className='row'>
              <td className='col bg-white'>Email: </td>
              <td className='col bg-white'>{profile?.email}</td>
            </tr>
            <tr className='row'>
              <td className='col bg-white'>Created At: </td>
              <td className='col bg-white'>{profile?.created_at}</td>
            </tr>
          </tbody>
        </table>
        {profile?.data.map((data) => (
          <table
            key={data.id}
            className='mt-3 table-fixed text-left border-separate [border-spacing:0.75rem] bg-slate-100'>
            <thead>
              <tr className='row'>
                <th colSpan={2} className='col bg-white'>
                  Data
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='row'>
                <td className='col bg-white'>ID:</td>
                <td className='col bg-white'>{data.id}</td>
              </tr>
              <tr className='row'>
                <td className='col bg-white'>User ID: </td>
                <td className='col bg-white'>{data.user_id}</td>
              </tr>
              <tr className='row'>
                <td className='col bg-white'>Data: </td>
                <td className='col bg-white'>{data.data}</td>
              </tr>
              <tr className='row'>
                <td className='col bg-white'>Created At: </td>
                <td className='col bg-white'>{data.created_at}</td>
              </tr>
            </tbody>
          </table>
        ))}
      </div>
    </div>
  );
};

export default ProfileComponent;
