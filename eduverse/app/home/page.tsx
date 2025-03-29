// pages/index.tsx
"use client";
import React from 'react';
import styled from 'styled-components';
import { FaHome, FaTrophy, FaUsers, FaCog } from 'react-icons/fa';
import Navbar from '../components/navbar/page';
import UserHUD from '../components/headerhud/page';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f4f5f7;
`;

const Header = styled.div`
  background-color: #2d2d3d;
  color: white;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Username = styled.div`
  font-size: 16px;
`;

const Level = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
`;

const QuestSection = styled.section`
  flex: 1;
  padding: 16px;
`;

const QuestTitle = styled.h2`
  font-size: 20px;
  color: #333;
`;

const ProgressBar = styled.div`
  background-color: #ddd;
  height: 10px;
  border-radius: 5px;
  margin-bottom: 8px;
  position: relative;
  width: 100%;
`;

const Progress = styled.div<{ progress: number }>`
  background-color: #4caf50;
  height: 100%;
  border-radius: 5px;
  width: ${(props) => props.progress}%;
`;

const QuestCard = styled.div`
  background-color: white;
  border-radius: 12px;
  margin-bottom: 16px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const QuestCardTitle = styled.h3`
  font-size: 18px;
  color: #333;
`;

const StartButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const Footer = styled.footer`
  background-color: #2d2d3d;
  color: white;
  display: flex;
  justify-content: space-around;
  padding: 16px;
`;

const IconButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const App = () => {
  return (
    <Container>
      {/* Header */}
      <UserHUD />

      {/* Main Content */}
      <QuestSection>
        <QuestTitle>Daily Quest 🐱</QuestTitle>
        <div className='bg-[#252627] rounded-3xl p-6 shadow-md mb-4'>
        <div>
            <div className='text-sm text-white-500 mb-2 flex justify-between'>
            <span>เข้าใช้งานติดต่อกันเป็นเวลา 7 วัน 🗓️</span>
            <span>5/7 Completed</span>
        </div>
        <ProgressBar className="mb-2">
            <Progress progress={71} />
        </ProgressBar>
        <div className='text-sm text-white-500 mb-2 flex justify-between'>
            <span>เพิ่มเพื่อนคนแรก 💸</span>
            <span>0/1 Completed</span>
        </div>
        <ProgressBar className="mb-2">
            <Progress progress={0} />
        </ProgressBar>
        </div>
        </div>

        <QuestTitle>Interested Quest 🍕</QuestTitle>
        <div className='bg-[#252627] rounded-3xl p-6 shadow-md mb-4'>
            <div>
                <div className='text-lg text-white-500 mb-2 flex justify-between'>
                    Main Quest
                </div>
                <QuestCard>
                    <QuestCardTitle>Math</QuestCardTitle>
                        <ProgressBar>
                            <Progress progress={78} />
                        </ProgressBar>
                        <div className='flex justify-between'>
                            <span className='text-sm text-black mt-3 flex justify-between'>Completed 78%</span>
                            <StartButton>Start</StartButton>
                        </div>

                </QuestCard>
                <QuestCard>
                    <QuestCardTitle>Science</QuestCardTitle>
                        <ProgressBar>
                            <Progress progress={52} />
                        </ProgressBar>
                        <div className='flex justify-between'>
                            <span className='text-sm text-black mt-3 flex justify-between'>Completed 52%</span>
                            <StartButton>Start</StartButton>
                        </div>
                </QuestCard>
                <div className='text-lg text-white-500 mb-2 flex justify-between'>
                    Side Quest
                </div>
                <QuestCard>
                    <QuestCardTitle>Finance</QuestCardTitle>
                        <ProgressBar>
                            <Progress progress={21} />
                        </ProgressBar>
                        <div className='flex justify-between'>
                            <span className='text-sm text-black mt-3 flex justify-between'>Completed 21%</span>
                            <StartButton>Start</StartButton>
                        </div>
                </QuestCard>
            </div>
        </div>
      </QuestSection>

      {/* Navbar*/}
      <Navbar />
    </Container>
  );
};

export default App;
