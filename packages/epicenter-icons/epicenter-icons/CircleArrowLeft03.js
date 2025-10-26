import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '12', 'cy': '12', 'r': '10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7.75 8C7.75 7.58579 7.41421 7.25 7 7.25C6.58579 7.25 6.25 7.58579 6.25 8L7.75 8ZM6.25 16C6.25 16.4142 6.58579 16.75 7 16.75C7.41421 16.75 7.75 16.4142 7.75 16H6.25ZM6.25 8L6.25 16H7.75L7.75 8L6.25 8Z', 'fill': 'currentColor' })
const _hoisted3 = h('path', { 'd': 'M10.5 12H17M12.5 9.5L10 12L12.5 14.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CircleArrowLeft03',
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
