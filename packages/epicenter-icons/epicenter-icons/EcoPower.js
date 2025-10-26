import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M9 19.5C5.54955 18.7234 3 16.1936 3 12C3 7.02944 11 2 11 2C11 2 15.1885 4.64794 17.5 8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17 15C15.4984 16.0014 13.0022 18.495 11 22M13.0022 18.9957C10.3354 13.128 16.506 10.9843 21 11.0001C21 15.9914 19.0034 21.6063 13.0022 18.9957Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'EcoPower',
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
