import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21.5002 12C21.5002 17.2467 17.247 21.5 12.0002 21.5C10.3721 21.5 8.83964 21.0904 7.50024 20.3687C5.50024 19.5 3.50024 19.9125 2.50024 20C2.98918 19.1667 3.60946 16.8818 2.98365 15C2.67005 14.057 2.50024 13.0483 2.50024 12C2.50024 6.75329 6.75354 2.5 12.0002 2.5C17.247 2.5 21.5002 6.75329 21.5002 12Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15.0002 15L9.00847 9.00033M14.992 9L9.00024 14.9997', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'BubbleChatCancel',
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
