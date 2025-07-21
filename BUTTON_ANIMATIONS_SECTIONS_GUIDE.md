# Button Animations trong Sections - Hướng dẫn sử dụng

## Tổng quan
Các section chính của theme Dawn đã được cập nhật để hỗ trợ tùy chọn animation cho button. Bây giờ bạn có thể dễ dàng thêm hiệu ứng animation cho button thông qua Shopify Admin mà không cần chỉnh sửa code.

## Sections đã được cập nhật

### 1. **Rich Text Section**
- **Vị trí**: Button blocks trong rich text
- **Tùy chọn**: Button Animation và Button 2 Animation
- **Cách sử dụng**:
  1. Thêm Rich Text section vào page
  2. Thêm Button block
  3. Chọn animation từ dropdown "Button Animation"

### 2. **Image Banner Section**
- **Vị trí**: Buttons block trong image banner
- **Tùy chọn**: Button 1 Animation và Button 2 Animation
- **Cách sử dụng**:
  1. Thêm Image Banner section
  2. Thêm Buttons block
  3. Chọn animation cho từng button

### 3. **Image with Text Section**
- **Vị trí**: Button block trong image with text
- **Tùy chọn**: Button Animation
- **Cách sử dụng**:
  1. Thêm Image with Text section
  2. Thêm Button block
  3. Chọn animation từ dropdown

### 4. **Slideshow Section**
- **Vị trí**: Button trong slide blocks
- **Tùy chọn**: Button Animation
- **Cách sử dụng**:
  1. Thêm Slideshow section
  2. Trong slide block, chọn animation cho button

### 5. **Multirow Section**
- **Vị trí**: Main button của section
- **Tùy chọn**: Button Animation
- **Cách sử dụng**:
  1. Thêm Multirow section
  2. Trong section settings, chọn animation cho button

## Các loại Animation có sẵn

### 🎯 **Primary Effects**
- **No Animation** - Không có hiệu ứng
- **Pulse Effect** - Hiệu ứng sóng lan tỏa
- **Bounce Effect** - Hiệu ứng nảy lên xuống
- **Scale Effect** - Hiệu ứng phóng to/thu nhỏ
- **Magnetic Effect** - Hiệu ứng từ tính (nâng lên)

### 🎨 **Secondary Effects**
- **Slide Effect** - Hiệu ứng trượt ánh sáng
- **Ripple Effect** - Hiệu ứng gợn sóng Material Design
- **Shadow Effect** - Hiệu ứng bóng đổ sâu

### ✨ **Special Effects**
- **Glow Effect** - Hiệu ứng phát sáng cầu vồng
- **Float Effect** - Hiệu ứng nổi liên tục

## Hướng dẫn chi tiết

### Bước 1: Thêm Section
1. Vào Shopify Admin > Online Store > Themes
2. Chọn "Customize" trên theme hiện tại
3. Chọn page bạn muốn chỉnh sửa
4. Click "Add section"

### Bước 2: Thêm Button Block
1. Chọn section có button (Rich Text, Image Banner, etc.)
2. Click "Add block" > "Button" (hoặc "Buttons")
3. Điền thông tin button (text, link)

### Bước 3: Chọn Animation
1. Trong button block settings
2. Tìm dropdown "Button Animation"
3. Chọn hiệu ứng mong muốn
4. Lưu thay đổi

## Ví dụ sử dụng theo ngữ cảnh

### Call-to-Action Buttons
```html
<!-- Rich Text với Pulse Effect -->
Rich Text Section > Button Block > Button Animation: "Pulse Effect"

<!-- Image Banner với Bounce Effect -->
Image Banner Section > Buttons Block > Button 1 Animation: "Bounce Effect"
```

### Navigation Buttons
```html
<!-- Image with Text với Magnetic Effect -->
Image with Text Section > Button Block > Button Animation: "Magnetic Effect"

<!-- Slideshow với Scale Effect -->
Slideshow Section > Slide Block > Button Animation: "Scale Effect"
```

### Premium/Featured Buttons
```html
<!-- Multirow với Glow Effect -->
Multirow Section > Settings > Button Animation: "Glow Effect"

<!-- Rich Text với Float Effect -->
Rich Text Section > Button Block > Button Animation: "Float Effect"
```

## Best Practices

### 1. **Chọn Animation phù hợp**
- **Call-to-Action**: Pulse, Bounce, Glow
- **Navigation**: Magnetic, Scale, Slide
- **Premium/Featured**: Glow, Float
- **Form buttons**: Ripple, Shadow

### 2. **Không lạm dụng**
- Chỉ sử dụng 1-2 animation trên cùng một page
- Đảm bảo animation có mục đích rõ ràng
- Tránh làm rối mắt người dùng

### 3. **Consistency**
- Sử dụng cùng loại animation cho cùng mục đích
- Tạo ra trải nghiệm nhất quán

### 4. **Performance**
- Animation tự động tắt trên mobile để tối ưu performance
- Sử dụng animation nhẹ cho button thường xuyên sử dụng

## Troubleshooting

### Animation không hiển thị
1. **Kiểm tra CSS**: Đảm bảo file `component-button-animations.css` đã được include
2. **Kiểm tra class**: Xác nhận animation class được thêm vào button
3. **Clear cache**: Xóa cache browser và Shopify

### Animation không hoạt động trên mobile
- Đây là tính năng bảo vệ performance
- Heavy animations tự động tắt trên mobile
- Sử dụng animation nhẹ như Scale, Magnetic

### Conflict với custom CSS
1. Kiểm tra CSS specificity
2. Đảm bảo không có CSS override
3. Sử dụng `!important` nếu cần thiết

## Custom Animation

Nếu muốn thêm animation mới:

### 1. Thêm CSS
```css
/* Trong component-button-animations.css */
.button--custom-animation {
  transition: all 0.3s ease;
}

.button--custom-animation:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
```

### 2. Thêm vào Schema
```json
{
  "type": "select",
  "id": "button_animation",
  "options": [
    {
      "value": "custom-animation",
      "label": "Custom Animation"
    }
  ]
}
```

## Accessibility

### Reduced Motion Support
- Tất cả animation đều hỗ trợ `prefers-reduced-motion`
- Tự động tắt khi user có setting giảm motion
- Đảm bảo accessibility cho người dùng nhạy cảm

### Focus States
- Button vẫn có focus states rõ ràng
- Keyboard navigation friendly
- Screen reader compatible

## Performance Tips

### Mobile Optimization
- Heavy animations tự động tắt trên mobile
- Sử dụng `transform` và `opacity` cho smooth animations
- Tránh layout thrashing

### Best Practices
1. **Test trên thiết bị thực tế**
2. **Monitor performance**
3. **Sử dụng animation có mục đích**
4. **Đảm bảo accessibility**

## Support

Nếu gặp vấn đề:
1. Kiểm tra documentation này
2. Test trên browser khác nhau
3. Verify CSS conflicts
4. Contact developer team

## Changelog

### Version 1.0
- ✅ Rich Text Section
- ✅ Image Banner Section  
- ✅ Image with Text Section
- ✅ Slideshow Section
- ✅ Multirow Section
- ✅ 10 loại animation cơ bản
- ✅ Mobile optimization
- ✅ Accessibility support 