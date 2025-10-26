import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18 8.5H12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M5 2.99999C5.00001 2.44771 5.44772 2 6 2L17.9991 2C18.6145 2 19.0838 2.55042 18.9866 3.15801L16.9998 14.5H10.4998L5.00019 22L5 2.99999Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'FoursquareLogo',
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
