import React from 'react';
import { X } from 'lucide-react';

interface ImagePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
}

export const ImagePreviewModal: React.FC<ImagePreviewModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl w-full bg-stone-900 rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white transition backdrop-blur-sm"
          aria-label="닫기"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black flex items-center justify-center">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="p-4 sm:p-5 bg-stone-900 text-white border-t border-stone-800 flex items-center justify-between">
          <h4 className="text-base sm:text-lg font-bold truncate">{title}</h4>
          <span className="text-xs text-stone-400">포레스트힐 캠핑파크 고화질 갤러리</span>
        </div>
      </div>
    </div>
  );
};
