import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12.5 2L10 6H14L11.5 10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17.5 6.00024H18.0005C18.5528 6.00024 19.0005 6.44796 19.0005 7.00024V10.4998M6.5 5.99994H6.00011C5.44778 5.99994 5.00005 6.44772 5.00011 7.00005L5.00048 10.4998', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16 19H22M16 16H22', 'stroke-linecap': 'square', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M8 13H2V22H8V13Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M22 13H16V22H22V13Z', 'stroke-linecap': 'square', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M2 19H8M2 16H8', 'stroke-linecap': 'square', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'BatteriesEnergy',
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
            _hoisted6
        ])
    }
})
