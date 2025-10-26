import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6 8.02344C7.10457 8.02344 8 7.12801 8 6.02344C8 4.91887 7.10457 4.02344 6 4.02344C4.89543 4.02344 4 4.91887 4 6.02344C4 7.12801 4.89543 8.02344 6 8.02344Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 20.0234C13.1046 20.0234 14 19.128 14 18.0234C14 16.9189 13.1046 16.0234 12 16.0234C10.8954 16.0234 10 16.9189 10 18.0234C10 19.128 10.8954 20.0234 12 20.0234Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M18 8.02344C19.1046 8.02344 20 7.12801 20 6.02344C20 4.91887 19.1046 4.02344 18 4.02344C16.8954 4.02344 16 4.91887 16 6.02344C16 7.12801 16.8954 8.02344 18 8.02344Z', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M6 8.02344V11.0234C6 11.5757 6.44772 12.0234 7 12.0234H12M18 8.02344V11.0234C18 11.5757 17.5523 12.0234 17 12.0234H12M12 12.0234V16.0234', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'GitFork',
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
            _hoisted4
        ])
    }
})
