"use client"
import React from 'react';


  const handleDownload = () => {
    // استبدال "path/to/your/file.pdf" بالمسار الفعلي لملف PDF الخاص بك
    const pdfURL = "path/to/your/file.pdf";
    
    // إنشاء عنصر a لتحميل الملف
    const link = document.createElement('a');
    link.href = pdfURL;
    link.download = 'اسم الملف.pdf'; // اسم الملف الذي سيظهر عند التحميل
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


export default handleDownload;