import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2.00778 21L2.00195 18.0019C2.00087 17.4489 2.4489 17 3.00195 17H6.99695C7.55008 17 7.99815 17.449 7.99695 18.0022L7.99046 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 9V13M12 13H7.0007C5.8964 13 5.00108 13.895 5.0007 14.9993L5 17M12 13H17C18.1046 13 19 13.8954 19 15V17', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16.0078 21L16.0019 18.0019C16.0009 17.4489 16.4489 17 17.0019 17H20.997C21.5501 17 21.9981 17.449 21.997 18.0022L21.9905 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M16 8V4C16 3.44772 15.5523 3 15 3H9C8.44772 3 8 3.44772 8 4V8C8 8.55228 8.44772 9 9 9H15C15.5523 9 16 8.55228 16 8Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Structure01',
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
            _hoisted4
        ])
    }
})
