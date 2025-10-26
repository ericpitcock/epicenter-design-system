import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19.5 2.5C20.6046 2.5 21.5 3.39543 21.5 4.5V19.5C21.5 20.6046 20.6046 21.5 19.5 21.5H4.5C3.39543 21.5 2.5 20.6046 2.5 19.5V4.5C2.5 3.39543 3.39543 2.5 4.5 2.5H19.5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14.5 10C14.5 8.61929 13.3807 7.5 12 7.5C10.6193 7.5 9.5 8.61929 9.5 10C9.5 11.3807 10.6193 12.5 12 12.5M12 12.5H13M12 12.5H11M8.5 12.5H11M11 12.5C11 13.5 10 16 8.5 16.5H14.0279C14.3384 16.5 14.6446 16.4277 14.9223 16.2889L15.5 16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'PoundSquare',
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
