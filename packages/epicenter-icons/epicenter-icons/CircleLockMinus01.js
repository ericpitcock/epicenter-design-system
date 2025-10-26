import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M11.25 21.9989C7.31358 22.0964 4.25 18.8064 4.25 14.999C4.25 11.133 7.36877 7.99894 11.216 7.99894C13.7944 7.99894 16.0456 9.40664 17.25 11.499', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15.75 9.49894V6.49894C15.75 4.01366 13.7353 1.99894 11.25 1.99894C8.76472 1.99894 6.75 4.01366 6.75 6.49894V9.49894', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12.75 16.9989H19.75', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CircleLockMinus01',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
