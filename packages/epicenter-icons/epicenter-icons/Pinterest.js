import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 11L8 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9.97368 16.5724C10.5931 16.8473 11.2787 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 12.9108 7.24367 13.7646 7.66921 14.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('circle', { 'cx': '12', 'cy': '12', 'r': '10', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Pinterest',
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
