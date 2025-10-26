import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 3V6', 'stroke-linecap': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 18V21', 'stroke-linecap': 'round' })
const _hoisted3 = h('path', { 'd': 'M21 12H18', 'stroke-linecap': 'round' })
const _hoisted4 = h('path', { 'd': 'M6 12H3', 'stroke-linecap': 'round' })
const _hoisted5 = h('path', { 'd': 'M18.3635 5.63672L16.2422 7.75804', 'stroke-linecap': 'round' })
const _hoisted6 = h('path', { 'd': 'M7.75804 16.2422L5.63672 18.3635', 'stroke-linecap': 'round' })
const _hoisted7 = h('path', { 'd': 'M18.3635 18.3635L16.2422 16.2422', 'stroke-linecap': 'round' })
const _hoisted8 = h('path', { 'd': 'M7.75804 7.75804L5.63672 5.63672', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'Loading03',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4,
            _hoisted5,
            _hoisted6,
            _hoisted7,
            _hoisted8
        ])
    }
})
