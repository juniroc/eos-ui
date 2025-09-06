interface NoticeModalProps {
  onClose: () => void;
  onConfirm: () => void;
}

export default function NoticeModal({ onClose, onConfirm }: NoticeModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-sm w-full mx-4">
        {/* 내용 */}
        <div className="p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            페이지를 나가시겠어요?
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            저장하지 않은 내용이 있다면 사라질 수 있습니다.
          </p>
        </div>

        {/* 액션 버튼들 */}
        <div className="flex gap-3 p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            취소
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium shadow-sm"
          >
            나가기
          </button>
        </div>
      </div>
    </div>
  );
}
