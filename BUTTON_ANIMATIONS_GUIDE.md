# Button Animations Guide

## Tổng quan
Theme Dawn đã được bổ sung 20 loại button animation khác nhau để tăng cường trải nghiệm người dùng và tạo ra giao diện hấp dẫn hơn.

## Cách sử dụng

### 1. Thêm CSS vào theme
Đảm bảo file `component-button-animations.css` đã được include trong theme:
```liquid
{{ 'component-button-animations.css' | asset_url | stylesheet_tag }}
```

### 2. Áp dụng animation cho button
Chỉ cần thêm class animation vào button hiện có:

```html
<!-- Button cơ bản -->
<button class="button button--pulse">Click me</button>

<!-- Button với nhiều class -->
<button class="button button--secondary button--scale">Scale Button</button>

<!-- Button với custom style -->
<button class="button button--glow" style="background-color: #ff6b6b;">Glow Button</button>
```

## Danh sách Animation

### 🎯 **Primary Button Animations**
- **`.button--pulse`** - Hiệu ứng sóng lan tỏa từ trung tâm
- **`.button--bounce`** - Hiệu ứng nảy lên xuống
- **`.button--scale`** - Hiệu ứng phóng to/thu nhỏ
- **`.button--magnetic`** - Hiệu ứng từ tính (nâng lên)

### 🎨 **Secondary Button Animations**
- **`.button--slide`** - Hiệu ứng trượt ánh sáng
- **`.button--ripple`** - Hiệu ứng gợn sóng Material Design
- **`.button--shadow`** - Hiệu ứng bóng đổ sâu
- **`.button--border-animate`** - Hiệu ứng viền chạy

### ✨ **Special Effects**
- **`.button--glow`** - Hiệu ứng phát sáng cầu vồng
- **`.button--neon`** - Hiệu ứng neon sáng
- **`.button--float`** - Hiệu ứng nổi liên tục
- **`.button--particle`** - Hiệu ứng hạt sao

### 🔄 **Interactive Effects**
- **`.button--rotate`** - Hiệu ứng xoay 360°
- **`.button--wave`** - Hiệu ứng sóng lan tỏa
- **`.button--zoom`** - Hiệu ứng phóng to
- **`.button--text-reveal`** - Hiệu ứng hiện text

### ⚠️ **Alert & Error Buttons**
- **`.button--shake`** - Hiệu ứng rung lắc (cho cảnh báo)
- **`.button--typewriter`** - Hiệu ứng máy đánh chữ

### 🌈 **Gradient Buttons**
- **`.button--gradient-shift`** - Hiệu ứng gradient chuyển màu

## Ví dụ sử dụng theo ngữ cảnh

### Call-to-Action Buttons
```html
<button class="button button--pulse">Mua ngay</button>
<button class="button button--bounce">Đăng ký</button>
<button class="button button--float">Khám phá</button>
```

### Navigation Buttons
```html
<button class="button button--secondary button--slide">Tiếp theo</button>
<button class="button button--secondary button--magnetic">Quay lại</button>
```

### Form Buttons
```html
<button class="button button--scale" type="submit">Gửi</button>
<button class="button button--ripple" type="reset">Làm lại</button>
```

### Alert Buttons
```html
<button class="button button--shake" style="background-color: #dc3545;">Xóa</button>
<button class="button button--typewriter" style="background-color: #fd7e14;">Cảnh báo</button>
```

### Premium/Featured Buttons
```html
<button class="button button--glow">Premium</button>
<button class="button button--neon">Featured</button>
<button class="button button--particle">Special</button>
```

### Refresh/Reload Buttons
```html
<button class="button button--rotate">⟳ Làm mới</button>
```

## Tùy chỉnh

### Thay đổi màu sắc
```html
<button class="button button--pulse" style="background-color: #your-color;">Button</button>
```

### Kết hợp nhiều hiệu ứng
```html
<button class="button button--scale button--shadow">Combined Effects</button>
```

### Responsive Design
Tất cả animation đã được tối ưu cho mobile:
- Heavy animations bị tắt trên mobile
- Performance được ưu tiên
- Touch-friendly interactions

## Accessibility

### Reduced Motion Support
Tất cả animation đều hỗ trợ `prefers-reduced-motion`:
- Tự động tắt khi user có setting giảm motion
- Đảm bảo accessibility cho người dùng nhạy cảm với animation

### Focus States
Tất cả button đều có focus states rõ ràng:
- Keyboard navigation friendly
- Screen reader compatible
- WCAG compliant

## Performance Tips

### Mobile Optimization
- Heavy animations tự động tắt trên mobile
- Sử dụng `transform` và `opacity` cho smooth animations
- Tránh layout thrashing

### Best Practices
1. **Không lạm dụng**: Chỉ sử dụng animation có mục đích
2. **Consistency**: Sử dụng cùng loại animation cho cùng mục đích
3. **Performance**: Test trên các thiết bị khác nhau
4. **Accessibility**: Luôn đảm bảo accessibility

## Demo Section

Để xem tất cả animation hoạt động, thêm section `button-animations-demo` vào page:

1. Vào Shopify Admin > Online Store > Themes
2. Chọn "Customize" trên theme hiện tại
3. Thêm section "Button Animations Demo"
4. Hover vào các button để xem hiệu ứng

## Troubleshooting

### Animation không hoạt động
1. Kiểm tra file CSS đã được include
2. Đảm bảo class được viết đúng
3. Kiểm tra console có lỗi JavaScript không

### Performance issues
1. Giảm số lượng animation trên cùng một page
2. Sử dụng `will-change` CSS property nếu cần
3. Test trên thiết bị thực tế

### Mobile issues
1. Animation tự động tắt trên mobile để tối ưu performance
2. Sử dụng touch-friendly interactions
3. Test trên nhiều thiết bị mobile khác nhau

## Custom Animation

Để tạo animation mới, thêm vào file `component-button-animations.css`:

```css
/* Custom Animation */
.button--custom {
  position: relative;
  transition: all 0.3s ease;
}

.button--custom:hover {
  /* Your custom hover effect */
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}
```

## Support

Nếu gặp vấn đề hoặc cần hỗ trợ:
1. Kiểm tra documentation này
2. Test trên browser khác nhau
3. Verify CSS conflicts
4. Contact developer team 