import React from 'react';


  
interface SocialInfo {
    accountName: string;
    handle: string;
    followers: number;
    following: number;
  }
  
  interface Avatar {
    id: string;
    color: string;
  }

  const socialInfos: SocialInfo[] = [
    {
      accountName: 'John Doe',
      handle: '@john_doe',
      followers: 10.2,
      following: 599,
    },
    {
      accountName: 'Jane Doe',
      handle: '@jane_doe',
      followers: 7.3,
      following: 450,
    },
  ];

  const avatars: Avatar[] = [
    { id: '1', color: '#D9D9D9' },
    { id: '2', color: '#D9D9D9' },
    { id: '3', color: '#D9D9D9' },
    { id: '4', color: '#D9D9D9' },
    { id: '5', color: '#D9D9D9' },
    { id: '6', color: '#D9D9D9' },
    { id: '7', color: '#D9D9D9' },
    { id: '8', color: '#D9D9D9' },
  ];


const SocialModal: React.FC<{ socialInfos: SocialInfo[], avatars: Avatar[] }> = ({ socialInfos, avatars }) => {

    
  return (
    <div className="SocialModal inline-flex items-start justify-start gap-[10px] rounded-[12px] border-0 border-solid border-[#2D2D2D] bg-[rgba(255,255,255,0.04)] p-[18px]">
{socialInfos && socialInfos.map((info) => (
        <div key={info.handle} className="Content inline-flex flex-col items-start justify-start gap-[24px]">
          <div className="Frame1000005067 flex flex-col items-start justify-center gap-[18px]">
            <div className="Group400 relative h-[60px] w-[60px]">
              <div className="Oval bg-#003E52 absolute h-[60px] w-[60px] opacity-50" />
              <div className="Twitter absolute left-[11.54px] top-[11.54px] h-[36.92px] w-[36.92px]">
                <div className="Symbol bg-#1D9BF0 absolute top-[3.10px] h-[30.77px] w-[36.92px]" />
              </div>
            </div>
            <div className="Frame1000005066 inline-flex h-[42px] flex-col items-start justify-center gap-[8px] self-stretch">
              <div className="Text font-Inter break-words text-[12px] font-medium text-[#818181]">{info.accountName}</div>
              <div className="Text font-Inter break-words text-[16px] font-medium text-white">{info.handle}</div>
            </div>
          </div>
          <div className="Frame1000005062 flex flex-col items-start justify-start gap-[8px]">
            <div className="Text font-Inter break-words text-[12px] font-medium text-[#818181]">Connected to</div>
            <div className="Frame1000005061 inline-flex items-start justify-start gap-[7px]">
              {avatars.map((avatar) => (
                <div key={avatar.id} className="Ellipse45 h-[28px] w-[28px] rounded-full bg-[#D9D9D9]" />
              ))}
            </div>
          </div>
          <div className="Frame1000005065 inline-flex items-start justify-start gap-[59px]">
            <div className="Frame1000005063 inline-flex flex-col items-start justify-start gap-[8px]">
              <div className="Text font-Inter break-words text-[12px] font-medium text-[#818181]">Followers</div>
              <div className="Text font-Inter break-words text-[16px] font-medium text-white">{info.followers}k</div>
            </div>
            <div className="Frame1000005064 inline-flex flex-col items-start justify-start gap-[8px]">
              <div className="Text font-Inter break-words text-[12px] font-medium text-[#818181]">Following</div>
              <div className="Text font-Inter break-words text-[16px] font-medium text-white">{info.following}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialModal;
