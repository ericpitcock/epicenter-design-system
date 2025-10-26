import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7 14L9.79289 11.2071C10.1834 10.8166 10.8166 10.8166 11.2071 11.2071L12.7929 12.7929C13.1834 13.1834 13.8166 13.1834 14.2071 12.7929L17 10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21.5 4.5V19.5C21.5 20.6046 20.6046 21.5 19.5 21.5H4.5C3.39543 21.5 2.5 20.6046 2.5 19.5V4.5C2.5 3.39543 3.39543 2.5 4.5 2.5H19.5C20.6046 2.5 21.5 3.39543 21.5 4.5Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Activity01',
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
