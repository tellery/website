import React from 'react'

export const GithubIcon = ({ fill, size = 30 }) => (
  <svg width={size} height={size} viewBox="0 0 30 30" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 0C6.713 0 0 6.713 0 15c0 6.637 4.294 12.244 10.256 14.231.75.131 1.031-.319 1.031-.712 0-.356-.018-1.538-.018-2.794-3.769.694-4.744-.919-5.044-1.763-.169-.43-.9-1.762-1.537-2.118-.526-.282-1.275-.975-.02-.994 1.182-.019 2.026 1.087 2.307 1.537 1.35 2.27 3.506 1.632 4.369 1.238.131-.975.525-1.631.956-2.006-3.338-.375-6.825-1.669-6.825-7.406 0-1.632.581-2.982 1.538-4.032-.15-.375-.675-1.912.15-3.975 0 0 1.256-.394 4.124 1.538 1.2-.338 2.475-.506 3.75-.506s2.55.168 3.75.506c2.87-1.95 4.126-1.538 4.126-1.538.825 2.063.3 3.6.15 3.975.956 1.05 1.537 2.382 1.537 4.032 0 5.756-3.506 7.03-6.844 7.406.544.468 1.013 1.369 1.013 2.775 0 2.006-.019 3.619-.019 4.125 0 .394.281.862 1.031.712C25.706 27.244 30 21.62 30 15c0-8.287-6.712-15-15-15z"
      fill={fill}
    />
  </svg>
)