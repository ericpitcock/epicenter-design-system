import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M11 8.5H8C6.89543 8.5 6 9.39543 6 10.5V13.5C6 14.6046 6.89543 15.5 8 15.5H11L18 20V4L11 8.5Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'VolumeMute01',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1
        ])
    }
})
