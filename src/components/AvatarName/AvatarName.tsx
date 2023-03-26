import React from 'react';
import './style.css';

export type AvatarNameProps = {
    style?: React.CSSProperties,
    userName?: string
}

export const AvatarName = (
    {
        style,
        userName,
    }: AvatarNameProps
) => {

    function stringToColor(string: string) {
        let hash = 0;
        let i;
      
        for (i = 0; i < string.length; i += 1) {
          hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        let color = '#';
      
        for (i = 0; i < 3; i += 1) {
          const value = (hash >> (i * 8)) & 0xff;
          color += `00${value.toString(16)}`.slice(-2);
        }
      
        return color;
      }
      
      function stringAvatar(name: string) {
        return {
          style: {
            backgroundColor: stringToColor(name),
          },
          children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
      }

    return (
        <div {...stringAvatar(userName? userName : 'User Name')} className="name" />
    )
}