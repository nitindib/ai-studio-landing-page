"use client";

type ImagePreviewModalProps = {
  imageUrl: string;
  onClose: () => void;
};

export default function ImagePreviewModal({
  imageUrl,
  onClose,
}: ImagePreviewModalProps) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
    >
      <img
        src={imageUrl}
        alt="Preview"
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] max-w-[90vw] rounded-2xl"
      />
    </div>
  );
}