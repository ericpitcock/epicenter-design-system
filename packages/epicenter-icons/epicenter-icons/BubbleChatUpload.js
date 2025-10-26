import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21.5002 11.9999C21.5002 17.2466 17.247 21.4999 12.0002 21.4999C10.3721 21.4999 8.83964 21.0903 7.50024 20.3686C5.50024 19.4999 3.50024 19.9123 2.50024 19.9999C2.98918 19.1665 3.60946 16.8817 2.98365 14.9999C2.67005 14.0569 2.50024 13.0482 2.50024 11.9999C2.50024 6.75317 6.75354 2.49988 12.0002 2.49988C17.247 2.49988 21.5002 6.75317 21.5002 11.9999Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9.00024 11.4999L12.0002 8.49988L15.0002 11.4999M12.0002 8.99988V15.4999', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'BubbleChatUpload',
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
