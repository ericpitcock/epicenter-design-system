import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5 8.49817H2.5C4.29927 3.74918 9.503 0.998088 14.5396 2.34292C19.904 3.77528 23.0904 9.25924 21.6565 14.5917C20.2227 19.9241 14.7116 23.0858 9.3472 21.6534C5.36419 20.5899 2.58192 17.2928 2 13.4826', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 7.99841V11.9984L14 13.9984', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Clock02',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
