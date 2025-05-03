import { Project } from '@/types';
import { Dialog, Transition, TransitionChild } from '@headlessui/react';
import { Fragment, useCallback, useState, useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';

interface ProjectTheme {
  bg: string;
  iconBg: string;
  iconColor: string;
  borderHover: string;
  buttonColor: string;
}

interface ProjectDetailModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
  theme: ProjectTheme;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
  theme,
}) => {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    setEnlargedImage(null);
    onClose();
  }, [onClose]);

  const openEnlargedImage = (imageUrl: string) => {
    setEnlargedImage(imageUrl);
  };

  const closeEnlargedImage = () => {
    setEnlargedImage(null);
  };

  useEffect(() => {
    // Reset enlarged image state when modal closes
    if (!isOpen) {
      setEnlargedImage(null);
    }
    
    // Handle ESC key globally
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (enlargedImage) {
          e.stopPropagation();
          e.preventDefault();
          closeEnlargedImage();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown, true); // Use capture phase
    return () => {
      window.removeEventListener('keydown', handleKeyDown, true);
    };
  }, [isOpen, enlargedImage]);

  const getStateStyle = (state: string) => {
    switch(state) {
      case "개발 완료":
        return "text-green-400 bg-green-400/10";
      case "Coming Soon":
        return "text-yellow-400 bg-yellow-400/10";
      case "개발 진행 중":
        return "text-blue-400 bg-blue-400/10";
      case "2025 출시 예정":
        return "text-purple-400 bg-purple-400/10";
      default:
        return "text-gray-400 bg-gray-400/10";
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog 
        as="div" 
        className="fixed inset-0 z-50 overflow-y-auto" 
        onClose={enlargedImage ? () => {} : handleClose}
        initialFocus={dialogRef}
      >
        <div ref={dialogRef} className="min-h-screen px-4 text-center">
          {/* Enlarged Image Modal */}
          {enlargedImage && (
            <div 
              className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90" 
              onClick={closeEnlargedImage}
            >
              <div className="max-w-[90vw] max-h-[90vh] relative">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    closeEnlargedImage();
                  }}
                  className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70"
                >
                  <FaTimes size={20} />
                </button>
                <img 
                  src={enlargedImage} 
                  alt="확대 이미지" 
                  className="max-w-full max-h-[90vh] object-contain"
                />
              </div>
            </div>
          )}
          
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black opacity-75" />
          </TransitionChild>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className={`inline-block w-full max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform rounded-2xl border border-[#333]/20 bg-[#1A1A1A] shadow-xl`}>
              <div className="flex justify-between items-start">
                <div className="flex flex-col">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-bold leading-6 text-white"
                  >
                    {project.title}
                  </Dialog.Title>
                </div>

                <div className="flex items-center space-x-4">
                  {project.state && (
                    <span className={`${getStateStyle(project.state)} text-xs font-medium py-1 px-3 rounded-full inline-flex items-center`}>
                      <i className="fas fa-circle text-[8px] mr-2"></i>
                      {project.state}
                    </span>
                  )}
                  <button
                    type="button"
                    className="text-white/50 hover:text-white focus:outline-none"
                    onClick={handleClose}
                  >
                    <FaTimes size={20} />
                  </button>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.categories.map((category, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#333]/50 text-white/70"
                    >
                      {category}
                    </span>
                  ))}
                </div>

                {project.detailContent && (
                  <div className="space-y-8">
                    {/* Overview */}
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3">개요</h4>
                      <p className="text-white/70">{project.detailContent.overview}</p>
                    </div>

                    {/* Architecture */}
                    {project.detailContent?.architecture?.imageUrl && (
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-4">아키텍처</h4>
                        <div className="bg-[#222]/40 rounded-lg overflow-hidden shadow-md">
                          <div className="p-4">
                            <img
                              src={project.detailContent?.architecture?.imageUrl}
                              alt="프로젝트 아키텍처"
                              className="w-full h-auto object-contain cursor-pointer hover:opacity-90"
                              onClick={() => {
                                const imageUrl = project.detailContent?.architecture?.imageUrl;
                                if (imageUrl) openEnlargedImage(imageUrl);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Project Results */}
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">프로젝트 결과물</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {project.detailContent.results.map((result, index) => (
                          <div 
                            key={index} 
                            className="bg-[#222]/40 rounded-lg overflow-hidden shadow-md"
                          >
                            <div className="relative h-auto max-h-[400px] w-full overflow-auto">
                              <img
                                src={result.imageUrl}
                                alt={result.title}
                                className="w-full object-contain cursor-pointer hover:opacity-90"
                                onClick={() => openEnlargedImage(result.imageUrl)}
                              />
                            </div>
                            <div className="p-4">
                              <h5 className="text-lg font-medium text-white mb-2">
                                {result.title}
                              </h5>
                              <p className="text-white/70 text-sm">
                                {result.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* My Role */}
                    <div className="bg-[#222]/40 rounded-lg p-5">
                      <h4 className="text-xl font-semibold text-white mb-3">프로젝트 역할</h4>
                      <ul className="list-disc pl-5 space-y-1 text-white/70">
                        {project.detailContent.myRole.map((role, index) => (
                          <li key={index}>{role}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Impact */}
                    <div className="bg-[#222]/40 rounded-lg p-5">
                      <h4 className="text-xl font-semibold text-white mb-3">프로젝트 영향</h4>
                      <p className="text-white/70">{project.detailContent.impact}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8 text-right">
                <button
                  type="button"
                  className={`inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-[#111] border border-transparent rounded-md hover:bg-[#222] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-${theme.buttonColor}`}
                  onClick={handleClose}
                >
                  닫기
                </button>
              </div>
            </div>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ProjectDetailModal;