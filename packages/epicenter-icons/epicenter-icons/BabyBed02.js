import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 7L12 15M16 7L16 15M8 7L8 15', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 17C19.3349 18.8671 15.8341 20 12 20C8.16586 20 4.66508 18.8671 2 17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M20 18V5C20 4.44772 20.4477 4 21 4L21.5 4M4 18V5C4 4.44772 3.55229 4.00001 3.00001 4L2.5 4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M4 7H20', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M4 15H20', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'BabyBed02',
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
            _hoisted5
        ])
    }
})
