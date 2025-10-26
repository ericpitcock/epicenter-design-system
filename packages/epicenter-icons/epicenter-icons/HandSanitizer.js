import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M11.2959 9H7.70412C5.61398 9 3.87621 10.6092 3.71591 12.6932L3.16565 19.8466C3.07629 21.0082 3.99473 22 5.15976 22H13.8402C15.0053 22 15.9237 21.0082 15.8344 19.8466L15.2841 12.6932C15.1238 10.6092 13.386 9 11.2959 9Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9.5 13.5V18.5M12 16H7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12.5 9V7C12.5 6.44772 12.0523 6 11.5 6H7.5C6.94772 6 6.5 6.44772 6.5 7V9', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M11 4.21874L16.3803 3.12587C16.7588 3.049 17.1477 3.19691 17.3794 3.50586L18.5 5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M21 10.5C21 11.6046 20.25 12 19.5 12C18.75 12 18 11.6046 18 10.5C18 9.39543 19.5 8 19.5 8C19.5 8 21 9.39543 21 10.5Z', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M11 5.99829V3.49418C11 2.67399 10.3299 2.00705 9.51278 2.00006C8.6858 1.99298 8 2.66385 8 3.49398V6', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'HandSanitizer',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4,
            _hoisted5,
            _hoisted6
        ])
    }
})
