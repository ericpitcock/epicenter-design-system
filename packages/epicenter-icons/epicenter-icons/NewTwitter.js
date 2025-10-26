import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'NewTwitter',
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
