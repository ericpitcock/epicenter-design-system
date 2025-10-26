import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M4.5 18H4C2.89543 18 2 17.1046 2 16V4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V16C22 17.1046 21.1046 18 20 18H19.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8.26403 22H15.736C16.9261 22 17.6423 20.6804 16.9936 19.6825L13.2577 13.9349C12.6662 13.0248 11.3338 13.0248 10.7423 13.9349L7.00637 19.6825C6.35774 20.6804 7.07387 22 8.26403 22Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'AirplayLine',
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
