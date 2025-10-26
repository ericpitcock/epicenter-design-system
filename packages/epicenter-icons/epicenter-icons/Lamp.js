import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 13V19' })
const _hoisted2 = h('path', { 'd': 'M9 22H15L14.4558 20.3675C14.1836 19.5509 13.4193 19 12.5585 19H11.4415C10.5807 19 9.81638 19.5509 9.54415 20.3675L9 22Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M3.64264 11.5862L7.20064 3.75859C7.68745 2.68761 8.75531 2 9.93174 2H14.0683C15.2447 2 16.3125 2.68761 16.7994 3.75859L20.3574 11.5862C20.6583 12.2483 20.1743 13 19.447 13H4.553C3.82572 13 3.34168 12.2483 3.64264 11.5862Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Lamp',
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
