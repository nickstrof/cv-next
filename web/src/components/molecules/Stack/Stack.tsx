'use client';
import { useState } from 'react';
import { StackProps } from "@/types/stack";
import './Stack.css'
import { useTranslations } from 'next-intl'
const Stack = ({ stackData, title, showSearch = false }: StackProps) => {
    const t = useTranslations('HomePage');
    const [searchTerm, setSearchTerm] = useState('');
    const filteredStackData = showSearch 
        ? stackData.filter(stack =>
            (stack.title?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
            (stack.description?.toLowerCase() || "").includes(searchTerm.toLowerCase())
        )
        : stackData;
    return (
        <>
            {showSearch && (
                <div className="search-container">
                    <input
                        type="text"
                        placeholder={`${t('stack.searchText')} ${title}...`}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                    <svg className="search-icon fill-primary" width="30" height="30"><use xlinkHref="#icon-c-search" /></svg>
                </div>
            )}
            <div className="stacks pad-y pad-x">
                <h3 className="stack-title">{title}</h3>                
                {filteredStackData.length > 0 ? (
                    <div className="inner">
                        {filteredStackData.map((stack, index) => (
                            <div key={index} className="stack">
                                <div className="stack-icon">
                                    <svg className="fill-primary" width="50" height="50"><use xlinkHref={`#icon-c-${stack.icon}`} /></svg>
                                </div>
                                <div className="stack-content">
                                    <h3 className="stack-title">{stack.title}</h3>
                                    <p className="stack-description">{stack.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    showSearch && (
                        <div className="no-results">
                            <p>{t('stack.errorMessage')} &quot;{searchTerm}&quot;</p>
                        </div>
                    )
                )}
            </div>
        </>
    );
};
export default Stack;

































// // Stack.tsx - Main container component
// 'use client';
// import { ReactNode } from 'react';
// import './Stack.css';
// interface StackContainerProps {
//   children: ReactNode;
//   className?: string;
// }
// export const StackContainer = ({ children, className = '' }: StackContainerProps) => {
//   return (
//     <div className={`stacks pad-y pad-x ${className}`}>
//       {children}
//     </div>
//   );
// };


// // StackHeader.tsx - Header with title
// interface StackHeaderProps {
//   title: string;
//   children?: ReactNode;
// }
// export const StackHeader = ({ title, children }: StackHeaderProps) => {
//   return (
//     <div className="stack-header">
//       <h3 className="stack-title">{title}</h3>
//       {children}
//     </div>
//   );
// };


// // StackSearch.tsx - Search component
// 'use client';
// import { useState } from 'react';
// import { useTranslations } from 'next-intl';
// interface StackSearchProps {
//   onSearch: (searchTerm: string) => void;
//   placeholder?: string;
// }
// export const StackSearch = ({ onSearch, placeholder }: StackSearchProps) => {
//   const t = useTranslations('HomePage');
//   const [searchTerm, setSearchTerm] = useState('');
//   const handleSearch = (value: string) => {
//     setSearchTerm(value);
//     onSearch(value);
//   };
//   return (
//     <div className="search-container">
//       <input
//         type="text"
//         placeholder={placeholder || t('stack.searchText')}
//         value={searchTerm}
//         onChange={(e) => handleSearch(e.target.value)}
//         className="search-input"
//       />
//       <svg className="search-icon fill-primary" width="30" height="30">
//         <use xlinkHref="#icon-c-search" />
//       </svg>
//     </div>
//   );
// };


// // StackGrid.tsx - Grid layout for stack items
// interface StackGridProps {
//   children: ReactNode;
//   className?: string;
// }
// export const StackGrid = ({ children, className = '' }: StackGridProps) => {
//   return (
//     <div className={`inner ${className}`}>
//       {children}
//     </div>
//   );
// };


// // StackItem.tsx - Individual stack item
// interface StackItemData {
//   title?: string;
//   description?: string;
//   icon?: string;
// }
// interface StackItemProps {
//   data: StackItemData;
//   onClick?: () => void;
// }
// export const StackItem = ({ data, onClick }: StackItemProps) => {
//   return (
//     <div className="stack" onClick={onClick}>
//       <div className="stack-icon">
//         <svg className="fill-primary" width="50" height="50">
//           <use xlinkHref={`#icon-c-${data.icon}`} />
//         </svg>
//       </div>
//       <div className="stack-content">
//         <h3 className="stack-title">{data.title}</h3>
//         <p className="stack-description">{data.description}</p>
//       </div>
//     </div>
//   );
// };


// // StackEmpty.tsx - Empty state component
// interface StackEmptyProps {
//   message: string;
//   searchTerm?: string;
// }
// export const StackEmpty = ({ message, searchTerm }: StackEmptyProps) => {
//   return (
//     <div className="no-results">
//       <p>
//         {message} {searchTerm && `"${searchTerm}"`}
//       </p>
//     </div>
//   );
// };


// // useStackFilter.ts - Custom hook for filtering
// import { useState, useMemo } from 'react';
// interface FilterableItem {
//   title?: string;
//   description?: string;
// }
// export const useStackFilter = <T extends FilterableItem>(items: T[]) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const filteredItems = useMemo(() => {
//     if (!searchTerm) return items;
    
//     return items.filter(item =>
//       (item.title?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
//       (item.description?.toLowerCase() || "").includes(searchTerm.toLowerCase())
//     );
//   }, [items, searchTerm]);

//   return {
//     searchTerm,
//     setSearchTerm,
//     filteredItems
//   };
// };


// // Usage Example - How to use the composed components
// 'use client';
// import { useTranslations } from 'next-intl';
// import { StackProps } from "@/types/stack";
// import {
//   StackContainer,
//   StackHeader,
//   StackSearch,
//   StackGrid,
//   StackItem,
//   StackEmpty,
//   useStackFilter
// } from './Stack';
// const StackWithSearch = ({ stackData, title }: StackProps) => {
//   const t = useTranslations('HomePage');
//   const { searchTerm, setSearchTerm, filteredItems } = useStackFilter(stackData);

//   return (
//     <>
//       <StackSearch 
//         onSearch={setSearchTerm}
//         placeholder={`${t('stack.searchText')} ${title}...`}
//       />
//       <StackContainer>
//         <StackHeader title={title} />
//         {filteredItems.length > 0 ? (
//           <StackGrid>
//             {filteredItems.map((stack, index) => (
//               <StackItem key={index} data={stack} />
//             ))}
//           </StackGrid>
//         ) : (
//           <StackEmpty 
//             message={t('stack.errorMessage')} 
//             searchTerm={searchTerm}
//           />
//         )}
//       </StackContainer>
//     </>
//   );
// };


// // Simple Stack without search
// const SimpleStack = ({ stackData, title }: StackProps) => {
//   return (
//     <StackContainer>
//       <StackHeader title={title} />
//       <StackGrid>
//         {stackData.map((stack, index) => (
//           <StackItem key={index} data={stack} />
//         ))}
//       </StackGrid>
//     </StackContainer>
//   );
// };


// // Main Stack component that decides which variant to use
// const Stack = ({ stackData, title, showSearch = false }: StackProps) => {
//   return showSearch ? (
//     <StackWithSearch stackData={stackData} title={title} />
//   ) : (
//     <SimpleStack stackData={stackData} title={title} />
//   );
// };
// export default Stack;