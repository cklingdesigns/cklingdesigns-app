import React from 'react';

interface IconItem {
  type: 'icon' | 'text';
  className?: string;
  label?: string;
}

const icons: IconItem[] = [
  { type: 'icon', className: 'fas fa-plane' },
  { type: 'text', label: 'Travel' },
  // Add more icons/text here
];
