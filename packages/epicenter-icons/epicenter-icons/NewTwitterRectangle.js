import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2.5 4.5C2.5 3.39543 3.39543 2.5 4.5 2.5H19.5C20.6046 2.5 21.5 3.39543 21.5 4.5V19.5C21.5 20.6046 20.6046 21.5 19.5 21.5H4.5C3.39543 21.5 2.5 20.6046 2.5 19.5V4.5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7 17.0002L11.1935 12.8067M17 7.00024L12.8065 11.1938M12.8065 11.1938L9.77778 7.00024H7L11.1935 12.8067M12.8065 11.1938L17 17.0002H14.2222L11.1935 12.8067', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'NewTwitterRectangle',
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
